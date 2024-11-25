describe('Handle Property Data via API', () => {
    var propertyData;

    before(() => {
        cy.fixture('api/property-data').then((data) => {
            propertyData = data;
        });
    });

    it('Add new property', () => {
        cy.addPropertyViaAPI(propertyData).then((response) => {
            expect(response.status).to.eq(200);       
            expect(response.body.id).to.not.be.null;   
            expect(response.body.rent).to.eq(propertyData.rent);
            expect(response.body.title).to.eq(propertyData.title);
            expect(response.body.description).to.eq(propertyData.description);
            expect(response.body.userId).to.eq(propertyData.userId);
        });
    });

    it('Delete a property', () => {
        cy.addPropertyViaAPI(propertyData).then((response) => {
            cy.deletePropertyViaAPI(response.body.id).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.message).to.eq("Property deleted successfully");
            });
        });
    });

    it('Get all properties returns non empty data', () => {
        cy.addPropertyViaAPI(propertyData).then((response) => {
            cy.getAllProperties().then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.not.null;
            });
            cy.deletePropertyViaAPI(response.body.id);        
        });
    });
});