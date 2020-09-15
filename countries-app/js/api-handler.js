class CountriesApiHandler {

    constructor() {

        this.app = axios.create({
            baseURL: 'https://restcountries.eu/rest/v2'
        })

        console.log('Instancia creada y aplicación inicializada:')
    }

    getAllCountriesInfo = () => this.app.get()
    getCountryInfo = countryName => this.app.get(`/name/${countryName}`)
    getCountriesByCurrency = currency => this.app.get(`/currency/${currency}`)
}