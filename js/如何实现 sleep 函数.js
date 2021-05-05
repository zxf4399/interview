function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time))
}

async function test() {
  const time = new Date()

  await sleep(2000)

  console.log(new Date().getTime() - time.getTime())
}

test()
