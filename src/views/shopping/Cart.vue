<template>
    <div class="cart">
        <loading :active.sync="isLoading"></loading>
        <div class="container" v-if="itemList !== 0">
            <h2 class="text-center my-3">今朝有酒今朝醉</h2>
                <!-- 購買商品 -->
                <div class="row d-flex justify-content-center">
                    <div class="col-md-10">
                        <div
                            class="table-responsive"
                        >
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th >選項</th>
                                        <th width="150" class="text-center">商品圖片</th>
                                        <th width="250" class="text-center">商品名稱</th>
                                        <th
                                            class="text-right"
                                        >數量</th>
                                        <th
                                            width="180"
                                            class="text-right"
                                        >價錢</th>
                                        <th
                                            class="text-right"
                                        >小計</th>
                                    </tr>
                                </thead>
                                <tbody v-if="cart.carts.length">
                                    <tr v-for="item in cart.carts" :key="item.id"
                                        >
                                        <td class="align-middle text-center">
                                            <a  @click="removeCartItem(item.id)">
                                                <i class="fas fa-trash-alt"
                                                    style='font-size:20px'
                                                    aria-hidden="true"
                                                ></i>
                                            </a>
                                        </td>
                                        <td
                                            class="align-middle bg-cover box2"
                                            :style="{backgroundImage:
                                            `url(${item.product.imageUrl})`}"
                                        >
                                        </td>
                                        <td class="align-middle text-center">
                                            {{item.product.title}}
                                        </td>
                                        <td class="align-middle text-right">{{item.qty}}</td>
                                        <td class="align-middle text-right">
                                            <ul>
                                                <li class="text-muted" v-if="item.product.origin_price"><del>原價:{{item.product.origin_price}}</del></li>
                                                <li class="red">特價:{{item.product.price}}</li>
                                            </ul>
                                        </td>
                                        <td class="align-middle text-right">
                                            <strong>${{item.qty * item.product.price}}</strong>
                                        </td>
                                    </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr v-if="cart.total">
                                            <td colspan="5" class="text-right">合計</td>
                                            <td class="text-right">${{ cart.total }}
                                                <!-- {{Math.round((cart.final_total / cart.total)/ cart.total * 10000)*10}} -->
                                            </td>
                                        </tr>
                                        <tr v-if="cart.final_total !== cart.total">
                                            <td colspan="5" class="text-right text-success">
                                                <strong>
                                                    套用優惠券
                                                </strong>
                                            </td>
                                            <td class="text-right text-gold">
                                                <h4>${{ cart.final_total }}</h4>
                                            </td>
                                        </tr>
                                    </tfoot>
                            </table>
                            <div>
                                <router-link to="/coupon" class="routerLink font-weight-bolder h5">✦ 還沒有優惠碼? 來玩玩吧!!</router-link>
                            </div>
                            <div class="input-group my-3">
                                <input type="text" class="form-control"
                                       v-model="couponCode"
                                       @input="addCouponCode"
                                       placeholder="請輸入優惠碼"
                                />
                                <div class="input-group-append">
                                    <button class="btn btn-secondary" type="button"
                                        @click="addCouponCode">
                                        輸入優惠碼
                                    </button>
                                </div>
                            </div>
                        </div>
                  </div>
            </div>
        </div>
        <router-link to="/checkout" 
            class="btn btn-primary text-white my-3 routerLink"
            href="#" role="button" v-if="itemList">前往結帳
        </router-link>
        <div class="container" v-else>
            <div class="h2 my-5">您目前沒有商品喔!</div>
            <button
                class="btn btn-outline-success mr-2"
                @click="backtocustomer"
            >繼續選購
            </button>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import { eventBus } from "../../main";

export default {
  name: 'Cart',
  data() {
    return {
        couponCode: '',
    };
  },
  computed: {
    ...mapGetters(['cart', 'isLoading']),
    itemList() {
      return this.cart.carts.length;
    },
  },
  methods: {
    ...mapActions(['getCart']),

    removeCartItem(id) {
      this.$store.dispatch('removeCartItem', id);
    },
    addCouponCode() {
      this.$store.dispatch('addCouponCode', this.couponCode);
      this.couponCode = '';
    },
    backtocustomer() {
      this.$router.push('/shop');
    },
  },
  created() {
    this.getCart();
    eventBus.$on('getCouponed', (couponNumber) => {
         this.couponCode = couponNumber;
         if(this.cart.carts.length){
             this.$bus.$emit('message:push', '優惠碼已填入, 請點選輸入優惠碼', 'success');
         }else{
             this.$bus.$emit('message:push', '請先選購商品', 'warning');
         }  
    });
  },
  beforeDestroy() {
      eventBus.$off('getCouponed')
  },
};
</script>

<style lang="scss" scoped>
    .cart{
        min-height:100vh;
    }
</style>
