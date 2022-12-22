
async function getData() {
    try {
    const data = await fetch('./data.json');

    const res = await data.json();

    console.log(res);
    }

    catch (err) {
        console.log(err);
    }

    finally {

    }


}

