import graphqlClient from "@/services/graphql-client.js";

export default {
    addBid(bid) {
        const mutation = `
        mutation ($bid: InputBid) {
            addBid(bid: $bid) {
                id
                localDateTime
                times
                bidAmount
                auctionResult
                userId
                shopId
            }
        }`

        const variable = {
            bid: bid
        };

        const graphql = {
            query: mutation,
            variables: variable,
        };

        return graphqlClient(graphql);
    },
    getAuctionWinner(xid) {
        const query = `
        query ($xid: Int) {
            getAuctionWinner(auctionId: $xid) {
                id
                localDateTime
                times
                bidAmount
                auctionResult
                user{
                    id
                    firstname
                    lastname
                }
                shop {
                    id
                    shopName
                }
                auction {
                    timeUnitForAuctionPeriod
                    timeUnitForNextAuction
                    auctionPeriod
                    nextAuction
                    startingBid
                    product {
                        productName
                        details
                    }
                }
            }
        }`

        const variable = {
            xid: xid
        }

        const graphql = {
            query: query,
            variables: variable
        }

        return graphqlClient(graphql)
    },
    findAuctionByUserIdOrAuctionIdOrShopId(userId, shopId, auctionId) {
        const query = `
        query ($userId: Int, $shopId: Int,$auctionId: Int) {
            findAuctionByUserIdOrAuctionIdOrShopId(
                userId: $userId
                auctionId: $auctionId
                shopId: $shopId
            ) {
                id
                localDateTime
                times
                bidAmount
                auctionResult
                user {
                    firstname
                    lastname
        
                }
                shop {
                    id
                    shopName
                    
                }
                auction{
                    id
                    product{
                        productName
                        saleTypeName
                        salePrice
                    }
                }
            }
        }`

        const variable = {
            userId: userId,
            shopId: shopId,
            auctionId: auctionId
        }

        const graphql = {
            query: query,
            variables: variable
        }

        return graphqlClient(graphql)
    },
}