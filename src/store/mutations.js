/*
* 包含多个直接更新state的方法（回调函数）的对象
* */
import Vue from 'vue'
import {
  RECEIVE_ADDRESS,
  RECEIVE_TYPES,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCH_SHOPS,
} from './mutation-types'

export default {
  [RECEIVE_ADDRESS](state,{address}){
    state.address = address
  },
  [RECEIVE_TYPES](state,{types}){
    state.types = types
  },
  [RECEIVE_SHOPS](state,{shops}){
    state.shops = shops
  },
  [RECEIVE_USER_INFO](state,{userInfo}){
    state.userInfo = userInfo
  },
  [RESET_USER_INFO](state){
    state.userInfo = {}
  },
  [RECEIVE_GOODS](state,{goods}){
    state.goods = goods
  },
  [RECEIVE_RATINGS](state,{ratings}){
    state.ratings = ratings
  },
  [RECEIVE_INFO](state,{info}){
    state.info = info
  },

  [INCREMENT_FOOD_COUNT](state,{food}){
    if(!food.count){//第一次增加
      // food.count = 1//新增数据（没有数据绑定）
      Vue.set(food,'count',1)//让新增属性也具备数据绑定
      //将food添加到cartFoods中
      state.cartFoods.push(food)
    }else{
      food.count++
    }
  },
  [DECREMENT_FOOD_COUNT](state,{food}){
    if(food.count){
      food.count--
      if(food.count===0){
        //将food从cartFoods中移除
        state.cartFoods.splice(state.cartFoods.indexOf(food),1)
      }
    }
  },
  [CLEAR_CART](state){
    //1.清除foot中的count
    state.cartFoods.forEach(food => food.count = 0)
    //2.移除购物车中的所有购物项
    state.cartFoods = []
  },
  [RECEIVE_SEARCH_SHOPS](state,{searchShops}){
    state.searchShops = searchShops
  },
}
