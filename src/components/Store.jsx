import React from 'react'

function Store() {
  return (
    <div class="store">
    <div class="container">
      <div class="row mt-5 align-items-center text-center gy-3">
        <div class="col-lg-5">
          <div>
            <h1 class="display-1 fw-bold">
              The <br />
              Concept <br />
              Store
            </h1>
            <p class="my-4">
              Our philosophy is present in every stage of our <br />
              production. We are endeavoring to contribute <br />
              to the creation of a better world.
            </p>
            <button class="btn p-1 px-5 rounded-5 bg-black text-white">
              DISCOVER MORE!
            </button>
          </div>
        </div>
        <div class="col-lg-7">
          <div>
            <img class="img-fluid" src="./img/kaktus.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Store
