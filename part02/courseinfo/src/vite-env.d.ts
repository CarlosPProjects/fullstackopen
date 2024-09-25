/// <reference types="vite/client" />

interface TCourse {
  id: number;
  name: string;
  parts: TPart[];
}

interface TPart {
  name: string;
  exercises: number;
  id: number;
}