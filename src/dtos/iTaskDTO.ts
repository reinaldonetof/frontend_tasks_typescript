export default interface iData {
  id: string;
  user_id: string;
  title: string;
  date: string;
  finish_date?: string | null;
  status: string;
  comments?: string | null;
  created_at: string;
  updated_at: string;
}
