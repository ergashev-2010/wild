import React from 'react'

function Dorilar() {
  return (
    <div class="dorilar">
    <div class="container">
      <div class="row justify-content-around text-center">
        <div class="col-lg-4 col-12">
          <div class="dori-1">
            <img class="img-fluid" src="./img/dori-1.png" alt="" />
            <div class="poco">
              <h3 class="fw-bold">
                The Wild Peanut <br />
                Butter
              </h3>
              <h3 class="fw-bold">€4,90</h3>
              <button class="btn p-2 px-5 rounded-5 rang">
                Buy Now!
              </button>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-12">
          <div class="dori-2">
            <img class="img-fluid" src="./img/dori-2.png" alt="" />
            <div class="poco">
              <h3 class="fw-bold">
                Tahini with Cocoa & <br />
                Honey
              </h3>
              <h3 class="fw-bold">€5,90</h3>
              <button class="btn p-2 px-5 rounded-5 rang">
                Buy Now!
              </button>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-12">
          <div class="dori-1">
            <img class="img-fluid" src="./img/dori-3.png" alt="" />
            <div class="poco">
              <h3 class="fw-bold">
                The Wild Hazelnut <br />
                Butter
              </h3>
              <h3 class="fw-bold">€6,90</h3>
              <button class="btn p-2 px-5 rounded-5 rang">
                Buy Now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Dorilar
