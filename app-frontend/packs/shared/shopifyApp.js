const shopifyAppConfig = document.getElementById('shopify-app-init').dataset;

import createApp from '@shopify/app-bridge';
import { isShopifyEmbedded } from '@shopify/app-bridge-utils';
import { Redirect } from '@shopify/app-bridge/actions';
const apiKey = '00c8d007ae1ef1b192c8fd5815e2d608';
const host = 'my-asus.myshopify.com';
const redirectUri = 'https://ihor-kropyvnyi.eu.ngrok.io/auth/shopify/callback';
const permissionUrl = `https://${host}/admin/oauth/authorize?client_id=${apiKey}&scope=read_products,read_content&redirect_uri=${redirectUri}`;

let app

if (isShopifyEmbedded()) {
     app = createApp({
        apiKey: apiKey,
        host: btoa(`https://${host}/admin`)
    });
    Redirect.create(app).dispatch(Redirect.Action.REMOTE, permissionUrl);

} else {
    window.location.assign(permissionUrl);
}

export default app
