

const Header = () => (
<header id="masthead" className="site-header outer" itemprop="mainEntity" itemscope="itemscope" itemtype="https://schema.org/WPHeader">
  <div className="inner">
    <div className="site-header-inside">
      <div className="site-branding">
        <p className="site-logo">
            <a href="/" title="Tuan Duc Design">
                <img src="/assets/images/tuanducdesign.jpg" alt="Tuan Duc Design" loading="lazy" decoding="async" />
            </a>
        </p>
        <h1 className="site-title screen-reader-text">
            <a href="/" title="Tuan Duc Design">Tuan Duc Design</a>
        </h1>
      </div>
      <nav id="main-navigation" className="site-navigation" aria-label="Main Navigation" itemprop="mainEntity" itemscope="itemscope" itemtype="https://schema.org/SiteNavigationElement">
        <div className="site-nav-inside">
          <button id="menu-close" className="menu-toggle">
            <span className="screen-reader-text">Mở Menu</span>
            <span className="icon-close" aria-hidden="true"></span>
          </button>
          <ul className="menu">
            <li className="menu-item">
              <a href="https://tuanducdesign.com/" title="Trang chủ">Trang chủ</a>
            </li>
			      <li className="menu-item">
              <a href="#vetoi" title="Về tôi">Về tôi</a>
            </li>
			      <li className="menu-item">
              <a href="#kinhnghiem" title="Kinh nghiệm">Kinh nghiệm</a>
            </li>
			      <li className="menu-item">
              <a href="#quangthoigian" title="Quãng thời gian">Quãng thời gian</a>
            </li>
			      <li className="menu-item">
              <a href="#khachhang" title="Khách hàng">Khách hàng</a>
            </li>
			      <li className="menu-item">
              <a href="https://service.tuanducdesign.com/" title="Dịch vụ" target="_blank" rel="noopener">Dịch vụ</a>
            </li>
          </ul>
        </div>
      </nav>
      <button id="menu-open" className="menu-toggle">
		  <span className="screen-reader-text">Đóng Menu</span>
		  <span className="icon-menu" aria-hidden="true"></span>
	  </button>
    </div>
  </div>
</header>
);

export default Header;
