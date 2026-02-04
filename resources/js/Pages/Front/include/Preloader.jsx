import React from 'react'

const Preloader = () => {
  return (
    <div>{/* <!-- Preloader --> */}
                <div className="loader-wrap">
                    <div className="preloader">
                        <div className="preloader-close">Preloader Close</div>
                    </div>
                    <div className="layer layer-one">
                        <span className="overlay"></span>
                    </div>
                    <div className="layer layer-two">
                        <span className="overlay"></span>
                    </div>
                    <div className="layer layer-three">
                        <span className="overlay"></span>
                    </div>
                </div>

                <div className="pageloader" style={{ zIndex: 999999 }}>
                    <div className="loader">
                        <div className="loader-inner semi-circle-spin">
                            <div></div>
                        </div>
                    </div>
                </div>
                {/* <!-- Pageloader --> */}</div>
  )
}

export default Preloader