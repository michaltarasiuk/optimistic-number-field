"use client";

import {
  addTodo,
  removeTodo,
  toggleTodo,
} from "@/app/examples/todo-list/_action";
import { Button } from "@/components/button";
import { Checkbox, CheckboxIndicator } from "@/components/checkbox";
import { Field, Label } from "@/components/field";
import { Form } from "@/components/form";
import { CheckIcon } from "@/components/icons";
import { Input } from "@/components/input";
import * as React from "react";
import styles from "./page.module.css";

export interface Todo {
  id: string;
  text: string;
  checked: boolean;
  pending: boolean;
}

export default function Page() {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [optimisticTodos, setOptimisticTodos] = React.useOptimistic(todos);

  async function handleAddTodo(formData: FormData) {
    const text = formData.get("todo") as string;
    if (!text.length) {
      return;
    }
    const todo: Todo = {
      id: crypto.randomUUID(),
      text,
      checked: false,
      pending: true,
    };

    setOptimisticTodos((prev) => [...prev, todo]);
    try {
      const addedTodo = await addTodo(todo);
      // https://github.com/tc39/proposal-async-context
      React.startTransition(() => {
        setTodos((prev) => [...prev, addedTodo]);
      });
    } catch (error) {
      console.error(error);
    }
  }

  function handleDeleteTodo(todo: Todo) {
    React.startTransition(async () => {
      setOptimisticTodos((prev) => prev.filter((t) => t.id !== todo.id));
      try {
        await removeTodo(todo.id);
        // https://github.com/tc39/proposal-async-context
        React.startTransition(() => {
          setTodos((prev) => prev.filter((t) => t.id !== todo.id));
        });
      } catch (error) {
        console.error(error);
      }
    });
  }

  function handleToggleTodo(todo: Todo) {
    React.startTransition(async () => {
      setOptimisticTodos((prev) =>
        prev.map((t) =>
          t.id === todo.id ? { ...t, checked: !t.checked, pending: true } : t,
        ),
      );
      try {
        await toggleTodo(todo.id);
        // https://github.com/tc39/proposal-async-context
        React.startTransition(() => {
          setTodos((prev) =>
            prev.map((t) =>
              t.id === todo.id
                ? { ...t, checked: !t.checked, pending: false }
                : t,
            ),
          );
        });
      } catch (error) {
        console.error(error);
      }
    });
  }

  return (
    <div className={styles.Page}>
      <Form action={handleAddTodo}>
        <Field name="todo">
          <Label>New todo</Label>
          <Input placeholder="What needs to be done?" />
        </Field>
        <SubmitButton />
      </Form>

      <ul className={styles.List}>
        {optimisticTodos.map((todo) => (
          <li key={todo.id} className={styles.Item}>
            <label className={styles.ItemLabel}>
              <Checkbox
                checked={todo.checked}
                onCheckedChange={() => handleToggleTodo(todo)}
              >
                <CheckboxIndicator>
                  <CheckIcon />
                </CheckboxIndicator>
              </Checkbox>
              <span className={todo.checked ? styles.TextDone : styles.Text}>
                {todo.text}
              </span>
            </label>
            <Button
              className={styles.DeleteButton}
              onClick={() => handleDeleteTodo(todo)}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SubmitButton() {
  return <Button type="submit">Add</Button>;
}
