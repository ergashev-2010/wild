import React from 'react'

export default function Header() {
  return (
    <div class="header">
          <div class="container">
            <div class="text-center header-text">
              <p class="display-1">
                Taste the Wild. <br />
                Find your Soul.
              </p>
            </div>
            <div class="d-flex justify-content-end mb-3">
              <div class="button">
                Our Website use cookies <button class="btn ok px-3">OK</button>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <img class=" mb-5" src="./img/belgi.png" alt="" />
            </div>
          </div>
        </div>
  )
}
