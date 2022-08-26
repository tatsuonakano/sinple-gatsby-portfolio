import * as React from "react"
import '../../styles/shopCartBtn.scss'

// ショッピングカートボタン実装
function ShopCartBtn(props) {
  return (
    <div>
      <a
        className="buy-btn buy-btn-tag buy-btn-tag--ver"
        href={props.siteUrl}
        rel="noopener nofollow sponsored"
        target="_blank"
      >
        <i class="fas fa-shopping-cart"></i>
        {props.storeName}で購入する
    </a >
    </div>
  );
}

export default ShopCartBtn;
