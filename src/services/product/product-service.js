import graphqlClient from "@/services/graphql-client.js";

export default {
    /* get all products and products in category */
    getAllProduct(shopId) {
        const query = `
        query ($shopId: Int) {
            getAllProduct(shopId: $shopId) {
                id
                productName
                details
                category
                imagesPath
                productStatus
                shopId
                salePrice
                storage
                saleTypeName
                variations {
                    id
                    variationName
                    options {
                        id
                        optionName
                        price
                        stock
                        image
                    }
                }
                shipments
                productAttribute {
                    id
                    text
                    attribute {
                        id
                        attribute
                    }
                }
                auction {
                    timeUnitForAuctionPeriod
                    timeUnitForNextAuction
                    auctionPeriod
                    nextAuction
                    startingBid
                }
            }
        }`

        const variable = {
            shopId: shopId
        }

        const graphql = {
            query: query,
            variables: variable
        }

        return graphqlClient(graphql)
    },
    getAllCategory() {
        const query = `
        query{
            getAllCategory{
                name
                categoryName
                order
            }
        }`

        const graphql = {
            query: query,
        };
        return graphqlClient(graphql);
    },

    /* save product */
    saveProduct(shopId, product) {
        const mutation = `
        mutation ($shopId: Int, $product: InputProduct) {
            saveProduct(shopId: $shopId, product: $product) {
                id
                productName
                details
                category
                imagesPath
                shopId
                productStatus
                salePrice
                saleTypeName
                storage
                shipments
                variations {
                    id
                    variationName
                    options {
                        id
                        optionName
                        price
                        stock
                        image
                    }
                }
                productAttribute {
                    text
                    attribute {
                        id
                        attribute
                    }
                }
            }
        }
        `
        /* auction {
            startingBid
            auctionPeriod
            nextAuction
            timeUnitForAuctionPeriod
            timeUnitForNextAuction
        } */
        const variable = {
            shopId: shopId,
            product: product
        };

        const graphql = {
            query: mutation,
            variables: variable,
        };

        return graphqlClient(graphql);
    },
    /* get attribute based on category */
    getCategory(id) {
        const query = `
        query ($xid: Int) {
            getCategory(id: $xid) {
                categoryName
                attributes{
                    attribute
                }
            }
        }`


        const variable = {
            xid: id
        }

        const graphql = {
            query: query,
            variables: variable
        }

        return graphqlClient(graphql)
    },

    /* update product status */
    updateProductStatus(productStatus) {
        const mutation = `
        mutation ($productStatus: ProductStatusInput) {
            updateProductStatus(productStatus: $productStatus) {
                id
                productName
                details
                category
                imagesPath
                productStatus
                shopId
                shipments
                variations {
                    id
                    variationName
                    options {
                        optionName
                        price
                        stock
                        image
                    }
                }
                productAttribute {
                    text
                    attribute {
                        attribute
                    }
                }
            }
        }`

        const variable = {
            productStatus: productStatus
        };

        const graphql = {
            query: mutation,
            variables: variable,
        };

        return graphqlClient(graphql);
    },

    /* get product by id */
    getProduct(id) {
        const query = `
        query ($xid: Int) {
            getProduct(id: $xid) {
                id
                productName
                details
                category
                imagesPath
                productStatus
                shopId
                salePrice
                shop {
                    id
                    shopName
                    idCard
                    shopLogoImagePath
                    selfiePhotoWithIdCardPath
                    promptPay
                    email
                    shopStatus
                    shopAddress {
                        houseNumber
                        moo
                        postalCode
                        district
                        subDistrict
                        province
                    }
                }
                storage
                saleTypeName
                variations {
                    id
                    variationName
                    options {
                        id
                        optionName
                        price
                        stock
                        image
                    }
                }
                shipments
                productAttribute {
                    id
                    text
                    attribute {
                        attribute
                    }
                }
                auction {
                    timeUnitForAuctionPeriod
                    timeUnitForNextAuction
                    auctionPeriod
                    nextAuction
                    startingBid
                }
            }
        }`

        const variable = {
            xid: id
        }

        const graphql = {
            query: query,
            variables: variable
        }

        return graphqlClient(graphql)
    },

    /* update product */
    updateProduct(product) {
        const mutation = `
        mutation ($product: InputUpdateProduct) {
            updateProduct(product: $product) {
                id
                productName
                details
                category
                imagesPath
                shopId
                productStatus
                salePrice
                startingBid
                storage
                auctionPeriod
                nextAuction
                saleTypeName
                timeUnitForAuctionPeriod
                timeUnitForNextAuction
                shipments
                variations {
                    id
                    variationName
                    options {
                        optionName
                        price
                        stock
                        image
                    }
                }
                productAttribute {
                    text
                    attribute {
                        attribute
                    }
                }
            }
        }`

        const variable = {
            product: product
        };

        const graphql = {
            query: mutation,
            variables: variable,
        };

        return graphqlClient(graphql);
    },

    /* delete variation */
    deleteVariations(id) {
        const query = `
        mutation ($xid: Int) {
            deleteVariations(id: $xid) 
        }`

        const variable = {
            id: id
        }

        const graphql = {
            query: query,
            variables: variable
        }
        return graphqlClient(graphql)
    },

    /* filter */
    productFilter(productFilter, pageNo, pageSize) {
        const query = `
        query ($productFilter: InputProductFilter, $pageNo: Int, $pageSize: Int) {
            productFilter(
                productFilter: $productFilter
                pageNo: $pageNo
                pageSize: $pageSize
            ) {
                number
                totalPages
                totalElements
                content {
                    id
                    productName
                    details
                    category
                    productStatus
                    imagesPath
                    salePrice
                    storage
                    saleTypeName
                    variations {
                        id
                        variationName
                        options {
                            id
                            optionName
                            price
                            stock
                            image
                        }
                    }
                    shipments
                    productAttribute {
                        id
                        text
                        attribute {
                            id
                            attribute
                        }
                    }
                }
            }
        }`

        const variable = {
            productFilter: productFilter,
            pageNo: pageNo,
            pageSize: pageSize
        }

        const graphql = {
            query: query,
            variables: variable
        }
        return graphqlClient(graphql)
    },
}