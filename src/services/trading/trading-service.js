import graphqlClient from "@/services/graphql-client.js";

export default {
    buyProduct(orderInput) {
        const mutation = `
        mutation ($orderInput: OrderInput) {
            buyProduct(orderInput: $orderInput) {
                id
                dateTime
                totalPrice
                paymentStatus
                Quantity
                orderStatus
                paymentStatus
                shop
                optionsList
            }
        }`

        const variable = {
            orderInput: orderInput
        };

        const graphql = {
            query: mutation,
            variables: variable,
        };

        return graphqlClient(graphql);
    },
    addToCart(orderInput) {
        const mutation = `
        mutation ($orderInput: OrderInput) {
            addToCart(orderInput: $orderInput) {
                id
                dateTime
                totalPrice
                paymentStatus
                Quantity
                orderStatus
                paymentStatus
                products
                optionsList
            }
        }`

        const variable = {
            orderInput: orderInput
        };

        const graphql = {
            query: mutation,
            variables: variable,
        };

        return graphqlClient(graphql);
    },
    getAddToCartProduct(userId) {
        const query = `
        query ($userId: Int) {
            getAddToCartProduct(userId: $userId) {
                id
                dateTime
                totalPrice
                paymentStatus
                quantity
                orderStatus
                products {
                    id
                    productName
                }
                users {
                    id
                    firstname
                    lastname
                }
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
                optionsList {
                    id
                    optionName
                    price
                    stock
                    image
                }
            }
        }`

        const variable = {
            userId: userId
        }

        const graphql = {
            query: query,
            variables: variable
        }

        return graphqlClient(graphql)
    },
    getProductAuctionType(shopId) {
        const query = `
        query ($shopId: Int) {
            getProductAuctionType(shopId: $shopId) {
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
    findProductOrderByUserIdOrProductIdOrShopId(userId, productId, shopId) {
        const query = `
        query ($userId: Int, $productId: Int, $shopId: Int) {
            findProductOrderByUserIdOrProductIdOrShopId(
                userId: $userId
                productId: $productId
                shopId: $shopId
            ) {
                id
                dateTime
                totalPrice
                paymentStatus
                quantity
                orderStatus
                products {
                    id
                    productName
        
                }
                users {
                    id
                    firstname
                    lastname
                }
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
                optionsList{
                    id
                    optionName
                    price
                    stock
                    image
                }
                
            }
        }`

        const variable = {
            userId: userId,
            productId: productId,
            shopId: shopId
        }

        const graphql = {
            query: query,
            variables: variable
        }

        return graphqlClient(graphql)
    },
}