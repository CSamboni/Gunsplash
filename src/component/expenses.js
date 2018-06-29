import uuid from 'uuid';

//ADD_EXPENSE

export const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    types: 'ADD_EXPENSE',
    expense: {
        uid: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

//REMOVE_EXPENSE

export const removeExpense = ( { id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//EDIT_EXPENSE

export const editExpene = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});