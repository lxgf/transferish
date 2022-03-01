import React, {useState} from 'react';
import axios from 'axios';
import {render} from "react-dom";

const UploadPage = () => {
    const [files, setFiles] = useState([])
    const [notice, setNotice] = useState('')
    const maxSize = 200000000 // bytes

    const onChange = async e => {
        if (!e.target.files[0]) {
            await setNotice('Файл не был выбран!');
            return
        } else{
            if (e.target.files[0].size >= maxSize) {
                await setNotice(`Выберите файл размером < ${maxSize/1000000} MB`)
                return
            }
        }

        const file = {
            name: e.target.files[0].name,
            size: (e.target.files[0].size / 1000000).toFixed(2) + ' MB',
            file: e.target.files[0],
            uploaded: false
        }

        await setFiles([...files, file])

        console.log(files)
        await setNotice('Добавлено :)')

        // const formData = new FormData;
        // formData.append('file', file);
        //
        // try {
        //     const res = await axios.post('/api/', formData, {
        //         headers: {
        //             'Content-Type': 'multipart/form-data'
        //         }
        //     });
        //     const response = res.data;
        //     console.log(response)
        // } catch (err) {
        //     if (err.response.status === 500) {
        //         console.log('Проблема с сервером');
        //     } else {
        //         console.log(err.response.data.msg)
        //     }
        // }
    }

    return (
        <div className="flex flex-col items-center text-gray-500 pt-32 px-2">
            <div className="w-full lg:w-auto uppercase text-gray-500 text-sm">Загрузки файлы, получи ссылку для скачивания</div>
            <h1 className="mt-2 mb-4 w-full lg:w-auto text-dark font-heading font-bold text-4xl lg:text-5xl lg:text-center">Передать файлы <br/> быстро, безопасно, просто</h1>
            <div className="w-full lg:w-auto text-lg">Если у вы уже загрузили файлы, вставьте ссылку <a href="#" className="underline">сюда</a>, либо найдите файл по ID <a href="#" className="underline">здесь</a>.</div>
            <div className="my-6 flex flex-col w-full lg:items-center">
                <label className="w-max flex px-5 py-3 items-center rounded-lg bg-dark cursor-pointer text-white">
                    <img src={require('../images/upload.svg').default} alt="Загрузить" className="h-6 mr-4"/>
                    <div className="flex flex-col text-left text-sm">
                        <div className="text-gray-300">Файл</div>
                        <div>Загрузить</div>
                    </div>
                    <input type='file' className="hidden" onChange={onChange} />
                </label>
                <div className="mt-2 text-xs">{notice}</div>
            </div>
            {files.map((file, index) => {
                return (
                    <div key={index} className="grid grid-cols-3 gap-2 max-w-2xl auto-cols-min">
                        <div className="text-right">{file.name.substr(0, 10)}</div>
                        <div className="text-center w-28">{file.size}</div>
                        <div className="text-left">{file.upload ? 'Загружен' : 'Не загружен'}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default UploadPage;
