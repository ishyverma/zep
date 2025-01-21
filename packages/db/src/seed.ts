import { prisma } from "."

async function seedDB() {
    try {
        const user = await prisma.user.create({
            data: {
                username: "shyam",
                password: "123123",
                type: "admin"
            }
        })
        const space1 = await prisma.space.create({
            data: {
                name: "First",
                width: 100,
                height: 200,
                creatorId: user.id,
                thumbnail: "https://asset-zepetoful.zepeto.io/lZS2as4ZxDWZ/VSxoN3wK879tUU0gPKuAocC/4xWOc3wK87v393d0eb4d2c545d826ffca1c87ca2128tUU0hW3snObC/%EB%8F%99%EB%AC%BC%20%EC%88%A0%EB%9E%98%EC%9E%A1%EA%B8%B0.png"
            }
        })
        const space2 = await prisma.space.create({
            data: {
                name: "Second",
                width: 100,
                height: 200,
                creatorId: user.id,
                thumbnail: "https://asset-zepetoful.zepeto.io/lZS2as4ZxDWZ/bUAWw3wK876tUU2jXStdY2j/jERQO3wK87ud992c5a288b2b326fa5a56bb02cc63a1tUU2jZKbfKed/ZEP%20%EA%B2%B0%ED%88%AC%EC%9E%A5.png"
            }
        })
        const space3 = await prisma.space.create({
            data: {
                name: "Third",
                width: 100,
                height: 200,
                creatorId: user.id,
                thumbnail: "https://asset-zepetoful.zepeto.io/lZS2as4ZxDWZ/j8BP23wK876tUU2jXRWQ5Cj/mYNrW3wK87ua3ab18e421207072241e73183ebdd6e8tUU2jZHKdQsm/ZEP%20%EB%8B%AC%EB%A6%AC%EA%B8%B0%20%EA%B2%BD%EA%B8%B0%EC%9E%A5.png"
            }
        })
        const space4 = await prisma.space.create({
            data: {
                name: "Forth",
                width: 100,
                height: 200,
                creatorId: user.id,
                thumbnail: "https://asset-zepetoful.zepeto.io/lZS2as4ZxDWZ/7Zhvk3wK879tUU2jXPcqgcF/SrsUk3wK87va3ab18e421207072241e73183ebdd6e8tUU2jZHfZiW4/%EB%B4%89%EB%B4%89%ED%95%99%EA%B5%90%20%ED%83%90%EC%A0%95%EB%8B%A8_%20%EC%82%AC%EB%9D%BC%EC%A7%84%20%ED%95%98%EB%8A%98%EB%B0%98.png"
            }
        })
        const element1 = await prisma.element.create({
            data: {
                imageUrl: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRCRca3wAR4zjPPTzeIY9rSwbbqB6bB2hVkoTXN4eerXOIkJTG1GpZ9ZqSGYafQPToWy_JTcmV5RHXsAsWQC3tKnMlH_CsibsSZ5oJtbakq&usqp=CAE",
	            width: 1,
	            height: 1,
                static: true
            }    
        })
        const element2 = await prisma.element.create({
            data: {
                imageUrl: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRCRca3wAR4zjPPTzeIY9rSwbbqB6bB2hVkoTXN4eerXOIkJTG1GpZ9ZqSGYafQPToWy_JTcmV5RHXsAsWQC3tKnMlH_CsibsSZ5oJtbakq&usqp=CAE",
	            width: 1,
	            height: 1,
                static: true
            }    
        })
    } catch (e) {
        return
    }
}
seedDB()