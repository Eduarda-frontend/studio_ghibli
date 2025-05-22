import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import Filme from "../../models/Filme"

type FiltroState = {
    termo?: string
    itens: Filme[]
}

const initialState: FiltroState = {
    termo: '',
    itens: []
}

const filtroSlice = createSlice({
    name:'filtro',
    initialState,
    reducers: {
        alteraTermo: (state, action: PayloadAction<string>) => {
            state.termo = action.payload
        },
        assistido: (
            state, 
            action: PayloadAction<{ id: string; assistido: boolean }>
        ) => {
            const indexDaTarefa = state.itens.findIndex(
                (f) => f.id === action.payload.id
            )
            if(indexDaTarefa >= 0){
                state.itens[indexDaTarefa].status = action.payload.assistido ? true : false
            }
        }
    }
})

export const { alteraTermo, assistido } = filtroSlice.actions

export default filtroSlice.reducer