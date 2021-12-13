function teste() {
    return cy.request({
        method: 'POST',
        url: '',
        headers: {
            accept: "application/json"
        },
        failOnStatusCode: false
    })
}

export { teste }