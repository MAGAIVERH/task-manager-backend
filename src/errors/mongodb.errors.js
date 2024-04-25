const NotFoundError = (res) => {
    return res
        .status(404)
        .send("Esse dado não foi encontrado no bando de dodos");
};

module.exports = {
    NotFoundError,
};
