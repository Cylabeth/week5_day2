
const countriesApp = new CountriesApiHandler()

document.querySelector('#getInfo').onclick = () => {

    const countryName = document.querySelector('#countryField').value

    countriesApp
        .getCountryInfo(countryName)
        .then(response => showResults(response.data))
        .catch(() => showResults())
}

function showResults(country) {
    country
        ?
        document.querySelector('#results').innerHTML = `<p>El país tiene ${country[0].population} habitantes</p>`
        :
        document.querySelector('#results').innerHTML = `<p style="color: red">El país no existe!</p>`

}