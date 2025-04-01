import Modal from "../components/Modal"
import StringCard from "../components/StringCard"
import stringsMethods from "../data/methods.json"
import { groupNames } from "../data/names"
import { useState } from "react"

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedMethod, setSelectedMethod] = useState(null)

    const handleOpenModal = (stringMethod) => {
        setSelectedMethod(stringMethod)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    const randomizedGroupNames = <p className="text-base-content text-opacity-80 text-lg">
        <span className="text-primary">
            {[...groupNames].sort(() => 0.5 - Math.random()).join(", ")}
        </span>
    </p>

    return (
        <div className="bg-base-200">
            <div className="container mx-auto p-4">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-primary mb-2">
                        String Methods - Grupo 5
                    </h1>
                    <p className="text-base-content text-opacity-70 text-lg">
                        Directo desde el corazón del
                        <span className="text-primary"> Dream Team </span>
                    </p>
                    {randomizedGroupNames}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {
                        stringsMethods.map((stringMethod) => (
                            <StringCard
                                key={stringMethod.title}
                                stringMethod={stringMethod}
                                onClick={() => handleOpenModal(stringMethod)}
                            />
                        ))
                    }
                </div>
            </div>

            {isModalOpen && selectedMethod && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    stringMethod={selectedMethod}
                />
            )}
        </div>
    )
}

export default Home