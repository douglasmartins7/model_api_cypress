function teste() {
    return cy.request({
        method: 'GET',
        url: '',
        headers: {
            accept: "application/json"
        },
        failOnStatusCode: false
    })
}

export { teste }