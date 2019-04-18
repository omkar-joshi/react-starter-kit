declare interface DemoData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

declare interface DemoStore {
  data: DemoData[];
  mockData: DemoData[];
  error?: Error | null;
}
