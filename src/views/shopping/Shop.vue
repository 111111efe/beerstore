<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <div class="jumbotron jumbotron-fluid bg-cover jumbotron-bg d-flex
                    flex-column justify-content-center text-left">
            <div class="container bg-transparented">
                <h1 class="display-4">釀‧哲學</h1>
                <p>
                    最天然的不過濾，不滅菌，不添加非天然香料
                    堅持手工釀造，堅持小批量生產，堅持自然發酵
                    自有配方，自有設備，自有釀酒師，自有酵母農場
                </p>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <!--標題列-->
                <div class="col-md-2 mb-4">
                    <div class="list-group sticky-top sticky-top">
                        <a  class="list-group-item list-group-item-action"
                            :class="{'active': show === 'all'}"
                            @click="checkList('all')"
                        >
                            <span>所有商品</span>
                        </a>
                        <a  class="list-group-item list-group-item-action"
                            :class="{'active': show === 'beer'}"
                            @click="checkList('beer')"
                        >
                            <i class="fas fa-beer mr-1">
                            </i>
                            Beer
                        </a>
                        <a  class="list-group-item list-group-item-action"
                            :class="{'active': show === 'acc'}"
                            @click="checkList('acc')"
                        >
                            公仔
                        </a>
                        <a  class="list-group-item list-group-item-action"
                            :class="{'active': show === 'other'}"
                            @click="checkList('other')"
                        >
                            其餘商品
                        </a>
                    </div>
                </div>
                <!--標題列-->
                <!-- <div class="col-md-12 my-3 sticky-top">
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a class="nav-link"
                            :class="{'active': show === 'all'}"
                            @click="checkList('all')"
                        >
                                <span>所有商品</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a  class="nav-link"
                                :class="{'active': show === 'beer'}"
                                @click="checkList('beer')"
                            >
                                <i class="fas fa-beer mr-1">
                                </i>
                                Beer
                            </a>
                        </li>
                        <li class="nav-item">
                            <a  class="nav-link"
                                :class="{'active': show === 'acc'}"
                                @click="checkList('acc')"
                            >
                                公仔
                            </a>
                        </li>
                        <li class="nav-item">
                            <a  class="nav-link"
                                :class="{'active': show === 'other'}"
                                @click="checkList('other')"
                            >
                                其餘商品
                            </a>
                        </li>
                    </ul>
                </div> -->
                <!--商品內容-->
                <div class="col-md-10">
                    <div class="row row-cols-1 row-cols-md-3">
                        <div class="col mb-4" v-for="product in filterProducts" :key="product.id">
                            <div class="card border-0 shadow h-100">
                                <div class="u-item-img bg-cover"
                                    :style="{backgroundImage: `url(${product.imageUrl})`}">
                                </div>
                                <div class="card-body">
                                    <span class="badge float-left"
                                        :class=
                                        "[product.category == '啤酒'?'badge-info' : 'badge-warning']"
                                        >
                                        {{product.category}}
                                    </span>
                                    <div class="card-title text-center h5 mr-4">
                                        <span class="text-dark h4">{{product.title}}</span>
                                    </div>
                                    <!--<p class="card-text text-left">{{product.content}}</p>-->
                                    <div class="d-flex justify-content-between">
                                        <!--顯示原價和特價-->
                                        <del class="h6 text-muted">
                                            {{product.origin_price?`原價${product.origin_price}元`:''}}
                                        </del>
                                        <div class="h6 text-danger">特價{{product.price}}元</div>
                                    </div>
                                </div>
                                <div class="card-footer d-flex">
                                    <div class="btn-group btn-group-toggle btn-block">
                                        <label class="btn btn-secondary active">
                                                <i class="fas fa-spinner fa-spin"
                                                    v-if="status.loadingItem === product.id">
                                                </i>
                                           <router-link :to="`/shop/${product.id}`"
                                                class="routerLink">
                                                查看更多
                                            </router-link>
                                        </label>
                                        <label class="btn btn-primary text-white"
                                            @click="addtoCart(product.id)">
                                            <i class="fas fa-cart-plus"></i>
                                            <span> 購物車</span>
                                        </label>
                                    </div>
                                    <!-- <button type="button"
                                        class="btn btn-primary btn-block ml-auto text-white"
                                            @click="addtoCart(product.id)">
                                            <i class="fas fa-spinner fa-spin"
                                                v-if="status.loadingItem === item.id">
                                            </i>
                                            <i class="fas fa-cart-plus"></i>
                                            購物車
                                    </button> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--商品內容-->
                <GoTop/>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import GoTop from '../../components/Gotop.vue';

export default {
  name: 'Shop',
  components: {
    GoTop,
  },
  data() {
    return {
      status: {
        loadingItem: '',
        isFavorite: '',
      },
      show: 'all',
      selected: '請選購商品數量',
    };
  },
  computed: {
    ...mapGetters(['favorites', 'products', 'cart', 'isLoading']),
    filterProducts() {
      switch (true) {
        case this.show === 'beer':
          return this.products.filter((item) => item.category === '啤酒');
        case this.show === 'acc':
          return this.products.filter((item) => item.category === '公仔');
        case this.show === 'other':
          return this.products.filter((item) => (item.category !== '公仔' && item.category !== '啤酒'));
        default:
          return this.products;
      }
    },
  },
  methods: {
    ...mapActions(['getFavorite', 'addtoFavorite', 'removeFavorite', 'getProducts', 'getCart']),
    checkList(val) {
      this.show = val;
    },
    getProducts() {
      this.$store.dispatch('getProducts');
    },
    addtoCart(id, qty = 1) {
      this.status.loadingItem = id;
      this.$store.dispatch('addtoCart', { id, qty });
      this.status.loadingItem = '';
    },
    addtoFavorite(product) {
      this.$store.dispatch('addtoFavorite', product);
    },
    removeFavorite(product) {
      this.$store.dispatch('removeFavorite', product);
    },
  },
  created() {
    this.getCart();
    this.getFavorite();
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped>
    .card-footer{
        padding:0;
    }
    .heart{
        position: absolute;
        top:1%;
        right: 1%;
        color:red;
        font-size: 16px;
    }
    .routerLink{
        color:white;
        text-decoration:none;
    }

</style>
