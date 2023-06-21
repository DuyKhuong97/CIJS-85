const Navsecion = () => {
    return (
        <div className="Nav-bar">
            <div className="Nav-bar-left">
                <p>Sắp xếp theo:</p>
                <button>Liên quan</button>
                <button>Mới nhất</button>
                <button>Bán chạy</button>
                <div class="dropdown">
                    <button class="btn-dropdown">Giá <i class="fa-sharp fa-solid fa-caret-down"></i></button>
                    <div class="dropdown-content">
                        <p>Tăng dần</p>
                        <p>Giảm dần</p>
                    </div>
                </div>
            </div>
            <div className="Nav-bar-right">
                <p><span style={{ color: 'red' }}>1</span>/15</p>
                <button type="button" name="prevPage"> back </button>
                <button type="button" name="nextPage"> next </button>
            </div>
        </div>

    )
};

export default Navsecion