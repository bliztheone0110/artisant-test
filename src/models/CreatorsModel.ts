export interface CreatorsModel {
    [key: string]: {
        user_id: number,
        display_name: string,
        public_address: string,
        custom_url: string,
        image: {
            original: string,
            compressed: string,
        }
    },
}


