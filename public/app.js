document.addEventListener('click', event => {
  if (event.target.dataset.type === 'remove') {
    const id = event.target.dataset.id

    remove(id).then(() => {
      event.target.closest('li').remove()
    })
  }
})


async function remove(id) {
  await fetch(`/${id}`, { method: 'DELETE' })
}

document.addEventListener('click', event => {
  if (event.target.dataset.type === 'put') {
    const id = event.target.dataset.id
    const title = prompt()
    if (title === null || title === '') {
      return
    }
    put(id, title).then(() => {
      const li = document.querySelector('li')
      li.innerHTML = `${title}<button
              class="btn btn-change bg-info ms-auto me-1"
              data-type="put"
              data-id="<%= notes[i].id %>"
            >
              Редактировать
            </button>
            <button
              class="btn btn-danger"
              data-type="remove"
              data-id="<%= notes[i].id %>"
            >
              &times;
            </button>`

      window.location = window.location.href
    })
  }
})


async function put(id, title) {
  await fetch(`/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify({
      title
    }
    )
  })
}