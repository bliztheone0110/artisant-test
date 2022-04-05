export interface ProductModel {
    product_id: number,
    name: string,
    description: string,
    quantity: number,
    initial_price: number,
    type: string,
    avatar: {
        original: string,
        compressed: string,
    },
    other_file: {
        original: string,
    },
    additional_photos: [
        {
            original: string,
            compressed: string,
        },
        {
            original: string,
            compressed: string,
        },
        {
            original: string,
            compressed: string,
        }
    ],
    created_by: {
        user_id: number,
        display_name: string,
        public_address: string,
        custom_url: string,
        image: {
            original: string,
            compressed: string,
        }
    },
    json_nft_data: {
        name: string,
        image: string,
        attributes: [
            {
                value: string,
                trait_type: string,
            }
        ],
        description: string,
        external_url: string,
    },
    json_nft_link: string,
    tx_status: string,
    created_at: string,
    updated_at: string,
    quantity_nfts_created: number,
    on_main_page: boolean,
    is_wearable: boolean,
    latest_price: string,
    quantity_available: number,
}