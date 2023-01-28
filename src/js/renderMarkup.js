export const renderMarkup = (requestData, ref) => {
  const markup = requestData
    .map(
      item => /* html */ `
        <li class="col-xl-3 col-lg-4 col-md-6 mb-4 js-photo-card">
          <div class="bg-white rounded shadow-sm overflow-hidden">
            <img
              src=${item.webformatURL}
              alt=${item.tags}
              class="img-fluid card-img-top object-fit-cover "
              loading="lazy"
            />
          </div>

          <div class="d-flex gap-2 p-1">
            <p class="d-flex flex-column gap-2 text-center ">
              <b>Likes</b>
              <b>${item.likes}</b>
            </p>
            <p class="d-flex flex-column gap-2 text-center " >
              <b>Views</b>
              <b>${item.views}</b>
            </p>
            <p class="d-flex flex-column gap-2 text-center ">
              <b>Comments</b>
              <b>${item.comments}</b>
            </p>
            <p class="d-flex flex-column gap-2 text-center ">
              <b>Downloads</b>
              <b>${item.downloads}</b>
            </p>
          </div>
        </li>
  `
    )
    .join('');

  ref.insertAdjacentHTML('beforeend', markup);
};
