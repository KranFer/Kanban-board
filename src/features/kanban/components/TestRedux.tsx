// src/features/kanban/components/TestRedux.tsx
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks';
import { addCard } from '../store/kanbanSlice';

import type { Card, RichText, TextChunk, Format } from '../types';


const TestRedux = () => {
  const dispatch = useAppDispatch();
  const cards = useAppSelector((state) => state.kanban.cards);
  
  const handleAddCard = () => {
    const newCard: Card = {
      id: `card_${Date.now()}`,
      title: {chunks:[ {text: "Test card", formats: []}]},
      tags: [],
      blockIds: [],
      columnId: 'col_todo',
      order: 0,
      progress: 0,
      executorIds: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    dispatch(addCard(newCard));
  };
  
  return (
    <div className="p-4 border rounded">
      <h2>Тест Redux</h2>
      <button 
        onClick={handleAddCard}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Добавить карточку
      </button>
      <div className="mt-4">
        <p>Всего карточек: {cards.length}</p>
        {cards.map(card => (
          <div key={card.id} className="p-2 border-b">
            {card.title.chunks.map(chunk => chunk.text).join(' ')}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestRedux;