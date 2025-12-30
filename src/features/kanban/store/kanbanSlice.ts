import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { 
  Card, 
  Block,
  Column,

} from '../types';

interface KanbanState {
  cards: Card[],
  columns: Column[],
  isLoading: boolean,
  error: string | null,
}

const initialState: KanbanState = {
  cards: [],
  columns: [
    { id: 'col_todo', title: {chunks:[ {text: "To Do", formats: []}]}, order: 0, cardIds: []},
    { id: 'col_inProgress', title: {chunks:[ {text: "In Progress", formats: []}]}, order: 1, cardIds: []},
    { id: 'col_done', title: {chunks:[ {text: "Done", formats: []}]}, order: 2, cardIds: []},
  ],
  isLoading: false,
  error: null,
};


const kanbanSlice = createSlice({
  name: 'kanban', // имя для devtools
  initialState,
  reducers: {
    // Каждый reducer = функция которая меняет state
    addCard: (state, action: PayloadAction<Card>) => {
      state.cards.push(action.payload);
    },
    
    updateCard: (state, action: PayloadAction<{ id: string; changes: Partial<Card> }>) => {
      const card = state.cards.find(c => c.id === action.payload.id);
      if (card) {
        Object.assign(card, action.payload.changes);
      }
    },
    
    deleteCard: (state, action: PayloadAction<string>) => {
      state.cards = state.cards.filter(card => card.id !== action.payload);
    },
  },
});


export const { addCard, updateCard, deleteCard } = kanbanSlice.actions;
export default kanbanSlice.reducer;