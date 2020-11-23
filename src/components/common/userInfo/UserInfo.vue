<template>
  <div id="user_info">
    <a href="#" class="clear_fix">
      <slot name="user-icon">
        <svg class="privateImage_svg left">
          <use
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xlink:href="#avatar-default"
          ></use>
        </svg>
      </slot>
      <div class="login_info left">
        <slot name="user-nickname">
          <div>登录/注册</div>
        </slot>
        <div class="phone">
          <span>
            <svg data-v-735ff1be="" fill="#fff" class="icon_mobile">
              <use
                data-v-735ff1be=""
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xlink:href="#mobile"
              ></use>
            </svg>
          </span>
          <slot name="user-phone">暂无绑定手机号</slot>
        </div>
      </div>
      <svg data-v-735ff1be="" fill="#fff" class="arrow_svg right">
        <use
          data-v-735ff1be=""
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xlink:href="#arrow-right"
        ></use>
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
};
</script>

<style lang="less" scoped>
#user_info {
  padding: 15px;
  margin-top: -5px;
  background-color: var(--color-tint);

  .privateImage_svg {
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 30px;
  }

  .arrow_svg {
    width: 11px;
    height: 22px;
    margin-top: 18px;
  }

  .login_info {
    color: #fff;
    margin: 10px 0 0 10px;

    .phone {
      position: relative;
      font-size: 13px;
      margin-top: 5px;
      margin-left: 15px;
      font-weight: 300;

      .icon_mobile {
        position: absolute;
        width: 12px;
        height: 18px;
        left: -15px;
        top: 0px;
      }
    }
  }
}
</style>