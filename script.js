async function main() {
    const response = await fetch('https://api.github.com/users/reybot')
    const data = await response.json()

    const imgTag = document.getElementById('img')
    imgTag.src = data.avatar_url
    const h1Tag = document.getElementById('login')
    h1Tag.innerText = data.login
    const h2Tag = document.getElementById('name')
    h2Tag.innerText = data.name
    const aTag = document.getElementById('blog')
    aTag.href = data.blog
    aTag.innerText = data.blog
    console.log(data)
}

main()
