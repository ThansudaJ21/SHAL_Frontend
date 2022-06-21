import graphqlClient from "@/services/graphql-client.js";

export default {
    /* register */
    registerShop(shop) {
        const mutation = `
        mutation ($shop: ShopInput) {
            registerShop(shop: $shop) {
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
                failureReasonLists{
                    failureReasons{
                        reason
                    }
                    text
                }
            }
        }
        `

        const variable = {
            shop: shop
        }

        const graphql = {
            query: mutation,
            variables: variable
        }

        return graphqlClient(graphql)
    },
    getAddressFromPostCode(postCode) {
        const query = `
        query($postCode:String){
            getAddressFromPostCode(postCode:$postCode){
                province
                amphoes{
                    amphoe
                    tumbons
                }
                
            }
        }`

        const variable = {
            postCode: postCode
        }
        const graphql = {
            query: query,
            variables: variable
        }
        return graphqlClient(graphql)
    },

    /* get shop */
    getRegisterShop(id) {
        const query = `
        query ($xid: Int) {
            getRegisterShop(id: $xid) {
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
                failureReasonLists {
                    failureReasons {
                        reason
                    }
                    text
                }
            }
        }`

        const variable = {
            xid: id,
        };

        const graphql = {
            query: query,
            variables: variable,
        };
        return graphqlClient(graphql);
    },

    /* get failure */
    getFailureReason() {
        const query = `
        query{
            getFailureReason{
            id
                reason
          }
        }`

        const graphql = {
            query: query,
        };
        return graphqlClient(graphql);
    },

    /* update */
    updateShopStatus(shopStatus) {
        const mutation = `
            mutation ($shopStatus: ShopStatusInput){
                updateShopStatus(shopStatus:$shopStatus){
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
            }`

        const variable = {
            shopStatus: shopStatus
        };

        const graphql = {
            query: mutation,
            variables: variable,
        };

        return graphqlClient(graphql);
    },
    shopFailureReason(shopId, failure) {
        const mutation = `
        mutation ($shopId: Int, $failure: [InputFailureReason]) {
            shopFailureReason(shopId: $shopId, failure: $failure) {
                id
                text
                failureReasons {
                    reason
                }
                shopId
            }
        }`

        const variable = {
            shopId: shopId,
            failure: failure
        };

        const graphql = {
            query: mutation,
            variables: variable,
        };

        return graphqlClient(graphql);
    },


    /* filter */
    shopQueryFilter(queryText, pageNo, pageSize) {
        const query = `
        query ($queryText: ShopQueryFilter, $pageNo: Int, $pageSize: Int) {
            shopQueryFilter(
                queryText: $queryText
                pageNo: $pageNo
                pageSize: $pageSize
            ) {
                number
                totalPages
                totalElements
                content {
                    id
                    shopName
                    idCard
                    shopStatus
                        failureReasonLists {
                        id
                        text
                        failureReasons {
                            reason
                        }
                    }
                }
            }
        }`

        const variable = {
            queryText: queryText,
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