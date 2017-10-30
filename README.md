# Simple react-redux
- a simple react-redux example

# Preview
- `$ npm install` (first time only)
- `$npm run dev`
- open the browser and goto http://localhost:8080/

# Tutorial Part I - Construct Redux

## Action
The ```Action``` is a pure function that just desrcibe an action happend

Generaly we will define a const string for each ```Action```
```
export const GB_ADD_TO_CART ='GB_ADD_TO_CART'
```

So if I want to describe an action that add something into a cart

```
export function addToCart(good,val){
    return{
        type:GB_ADD_TO_CART,
        good:good,
        val:val
    }
}
```

As you see the function have ```type```, ```good``` and ```val```, and it's ready for next step.

## Dispatcher
When you want to start up an ```Action``` you have to package it first, and that is ```Dispatcher```

**app/App.jsx** (code segment)
```
dispatch(addToCart(good,val))
```
> It just show how to package it, you should read complete code in ```app/App.jsx```

In this file we use ```props``` to send our ```Dispatcher``` (with ```Action```) to ```Component``` then our ```Component``` can use ```props``` to operate the ```store``` without import Redux

## Reducer
Reducer is the core that you save everything here, you will start up an ```Action``` then package it to a ```Dispatcher``` and ```Reducer``` will catch it and save into ```Store```

The standard reducer should look like this

**app/moudel/goodsBlock/reducer.js**
```
import { GB_ADD_TO_CART,GB_REMOVE_FROM_CART } from './action.js'

const initSta = {
    goods:[],
    idCounter:0
};

var reducer = function(state=initSta, action){
    console.log('userReducer was called with state', state, 'and action', action)

    switch(action.type){
        case GB_ADD_TO_CART :
            return{
                ...state,
                goods:[
                    ...state.goods,
                    { name:action.good, val:action.val, id:state.idCounter+1 }
                ],
                idCounter:state.idCounter+1
            }
        case GB_REMOVE_FROM_CART:
            return {
                ...state,
                goods: state.goods.filter((good) => good.id !== action.id)
            }
        default:
            return state;
    }
}

export default reducer
```
> I konw it's long and annoying but you have to type this by yourself

# Store
Okay, finally we are here. In the end when you package the ```Reducer``` it becomes to ```Store```

**app/index.jsx**
```
...

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer.js'

...

let store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
  ,
  document.getElementById('root')
)
```

You can create ```Store``` with mulit ```Reducer```, just use ```combineReducers()```, see below

# ...
> waitting for edit tutorial
- connect()
- combineReducers()


