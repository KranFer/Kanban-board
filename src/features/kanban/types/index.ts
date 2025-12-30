export type CardId = `card_${string}`;
export type ColumnId = `col_${string}`;
export type BlockId = `block_${string}`;
export type ProfileId = `user_${string}`;
export type TagId = `tag_${string}`;

export type BlockType = 'text' | 'todo' | 'image' | 'heading' | 'note';

export interface Card {
  id: CardId;
  title: RichText;
  tags: TagId[];
  blockIds: BlockId[];
  columnId: ColumnId;
  order: number;
  progress: number;
  executorIds: ProfileId[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Column {
  id: ColumnId;
  title: RichText;
  order: number;
  cardIds: CardId[];
}

export interface RichText {
  chunks: TextChunk[];
}

export interface TextChunk {
  text: string;
  formats: Format[];
}

export type Format = 'bold' | 'italic' | 'underline';

export interface Profile {
  id: string;
  mail: string;
  name: string;
  avatar?: string;
}

export interface Block {
  id: BlockId;
  type: BlockType;
  order: number;
  cardId: CardId;
  createdAt: Date;
  updatedAt: Date;
}

export interface TextBlock extends Block {
  type: 'text';
  content: RichText;
}

export interface HeadingBlock extends Block {
  type: 'heading';
  content: RichText;
  level: 1 | 2 | 3;
}

export interface ImageBlock extends Block {
  type: 'image';
  url: string;
  alt?: string;
  caption?: string;
  width?: number;
  height?: number;
}

export interface TodoBlock extends Block {
  type: 'todo';
  items: TodoItem[];
}

export interface NoteBlock extends Block {
  type: 'note';
  content: string;
  variant?: 'info' | 'warning' | 'success' | 'error';
}

export interface TodoItem {
  id: string;
  text: string;
  checked: boolean;
  order: number;
}