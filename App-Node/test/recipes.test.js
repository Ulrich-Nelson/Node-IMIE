const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
const recipes = require('../src/controllers/recipes');
const Recipes = require('../src/models/recipesModel');
const scaping = require('../src/scraping');

const app = require('../main');

chai.use(chaiHttp);

describe('Test for recipes', () => {

    // Create data
    // before(async() => {
    //     scaping.allRecipes()
    // })


    describe('Test to allRecipes scaping', () => {
        /** *
         * Test Fonctionnel
         */
        it('Should receive an object (ingredients, steps)', async () => {

            const data = {

                type: 'elements[k]',
                title: '',
                link: '/fr/recettes/original/f6c14c46-ba92-4f56-a19c-43f5d57d17f4/',
                image: '',
                numberPeople: 2,
                preparationTime: 2,
            }
            return scaping.detailRecipe(data).then(res => {
                expect(typeof res).to.equal('object')
                expect(typeof res.ingredients).to.equal('object')
                expect(typeof res.steps).to.equal('object')

            }).catch(err => {
                expect(typeof err).to.equal('object')
                expect(typeof err.error).to.equal('object')
            })
        });

    });


    describe('Test to allRecipes', () => {
        /** *
         * Test unitaire
         */
        it('Should receive an object (ingredients, steps)', async () => {

            // res = await chai.request(app).post('/register').send({name: 'bob'})
            res = await chai.request(app).get('/recipes/all/original').send()
            expect(res.status).to.equal(200)
            expect(Array.isArray(res.body)).to.equal(true)
            expect(res.body).to.have.length(76)

        });

    });

    // Delete data
    // after(() => {
    //     return Recipes.deleteMany({}, (err) => console.log((err) ? err : 'The data of the recipe collection is deleted by test'));
    // })

});