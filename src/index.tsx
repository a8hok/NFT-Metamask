/*
A. Do the following on Localhost
1. Upload as per the youtube video
2. Connect wallet
3. Ability to mint
4. Secondary sales & Royalties

B. Do all of this on Polygon
*/

import App from "./App";
import ReactDom from "react-dom";

ReactDom.render(<App/>, document.getElementById("root"));


// https://thirdweb.com/portal/guides/mint-nft-collection-using-typescript-sdk
// https://thirdweb.com/portal/guides/create-a-pack-with-typescript-and-nextjs
// https://thirdweb.com/portal/guides/create-your-own-auction-with-thirdweb-typescript-sdk
// https://thirdweb.com/portal/guides/create-a-drop-with-typescript-sdk
// https://thirdweb.com/portal/guides/add-connectwallet-to-your-website
// https://thirdweb.com/portal/guides/minting-with-signature
// https://thirdweb.com/portal/guides/sdk-guide
// https://thirdweb.com/portal/guides/auction-button-react
// https://thirdweb.com/portal/guides/claim-button-react
// https://thirdweb.com/portal/guides/token-button-react
// https://thirdweb.com/portal/guides/sign-in-with-ethereum-using-thirdweb-connectwallet
// https://thirdweb.com/portal/guides/create-app-that-rewards-nft-when-watching-youtube-video
// https://thirdweb.com/portal/guides/wallet-for-sms-email-login
// https://thirdweb.com/portal/guides/setup-gasless-transactions
// https://thirdweb.com/portal/guides/sdk-guide#code-to-instantiate-the-sdk-at-the-client-side-frontend

// https://thirdweb.com/portal/guides/create-your-own-marketplace-with-thirdweb-typescript-sdk

// import { ethers } from "ethers";
// import { ThirdwebSDK } from "@3rdweb/sdk";

// const rpcUrl = "https://matic-mumbai.chainstacklabs.com/";
// const provider = ethers.getDefaultProvider(rpcUrl);
// const sdk = new ThirdwebSDK(provider);

// // Initialize market module by passing in the module address
// const marketModuleAddress = "0xbde32D0D6a140a4a9ACB06cc9A03717cB1d82937";
// const market = sdk.getMarketplaceModule(marketModuleAddress);

// market
//   .getAllListings()
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const nftCollectionAddress = "0xB6BC328F36D6Eb22ba3a051f556cbCDcfa4cA9c1"jndf
// const nft = sdk.getNFTModule(nftCollectionAddress);

// nft.balance().then((response) => {
//   console.log(response)
// }).catch((error) => {
//   console.log(error);
// })
