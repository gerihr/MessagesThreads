export interface Message {
  question_id: number;
  subject_id: string;
  score?: string;
  reply_to?: string;
  thread_id: string;
  text: string;
  created_at: string;
  acknowledged? : boolean;
  subject: string;
  question: string;
  team: string;
  id: string;
  
}

export interface MessageThread extends Array<Message>{}

export interface MessageThreadArray extends Array<MessageThread>{}
