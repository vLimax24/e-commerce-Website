import connect from '../../../../db'
import { NextResponse } from 'next/server'
import admins from '../../../../models/admin'

export const GET = async (request) => {
    try {
        await connect()
        const adminUsers = await admins.find()
        return new NextResponse(JSON.stringify(adminUsers), {status: 200})
    } catch (error) {
        return new NextResponse("Error in searching Username", error, {status: 500})
    }
}