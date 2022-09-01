import {ADMIN_ROUTE} from "../utils/consts";
import {useHttp} from "./useHttp";
import {useContext} from "react";
import {LendingContext} from "../context/LendingContext";



export const useMongoLandingData =  async () => {
    const {loading, error, message, request, clearError} = useHttp()
    try {
        const data = await request('/api/data/lending')
        return data
    } catch (e) {

        return {}
    }

}