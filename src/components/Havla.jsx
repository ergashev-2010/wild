import React from 'react'

function Havla() {
  return (
    <div class="halva">
    <div class="container">
      <div class="row gy-4">
        <div class="col-lg-7">
          <div class="pink">
            <div>
              <h1 class="display-1 fw-bold">Wild Halva</h1>
            </div>
            <div class="d-flex gap-5">
              <div>
                <h3 class="mt-5">A magical seed..</h3>
                <p class="my-3">
                  All the treasures are hidden in a <br />
                  chest. Respectively, our <br />
                  treasures are enclosed in their <br />
                  Wild shell.
                </p>
                <h4>500G | FROM 8,90€</h4>
                <button class="btn mt-5 p-1 px-3 rounded-4 bg-black text-white">
                  DISCOVER THEM NOW!
                </button>
              </div>
              <div>
                <img class="img-fluid" src="./img/halva.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="en text-center">
            <img class="img-fluid" src="./img/e .eeee.png" alt="" />
            <h3 class="my-4">
              Spread your Love <br />
              with a Wild Gift!
            </h3>
            <button class="btn mt-5 p-1 px-5 rounded-4 bg-black text-white">
              DISCOVER THEM NOW!
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Havla
