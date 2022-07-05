import React from 'react';

const Carts = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-10'>
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="..." class="img-fluid rounded-start" alt="..."/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text"><small class="text-muted">  price </small></p>
                  <p class="card-text"><small class="text-muted">  qauntity </small></p>
                  <p class="card-text"><small class="text-muted">  total </small></p>
                  <button className='btn btn-primary'> save </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-2'>
          hgff 4
        </div>

      </div>
    </div>
  );
}

export default Carts;
