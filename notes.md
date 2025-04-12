# Redux
- Redux is not manadatory, use only its is required
- if we are building large scale project then use this
- React and Redux are different library
- Zustand is alternative for redux
It is State Container

clicks button -> dispatches an action -> calls reducer function -> modifies and updates the slice-> selector -> cart

# Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store
- connect our store to add
- Slice (cartSlice)
- dispatch (action)
- Selector


# Very Important
- Subsribe to correct portion os store otherwise it is big performance loss 
- don't subscibe to whole store , because it updates when something changes in store in another slice, then it updates and it is not required

- In older version of redux(vanilla), redux says never mutate the state and at that time we have to make copy of state and modify the copy and then return it.

But in REDUX TOOLKIT , we HAVE TO MUTATE THE STATE
Redux behind the scenes uses Immer for handling above

- we can use rtk query for api/ fetching data