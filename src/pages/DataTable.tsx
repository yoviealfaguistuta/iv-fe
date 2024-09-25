interface DataUser {
    nama: string;
    umur: number;
    alamat: string
}

const DataTable = () => {
    const dataUser = [
        {
            "nama": "Andi",
            "umur": 20,
            "alamat": "Pasaraya Blok M Gedung B Lt. 6 Jalan Iskandarsyah II No.7, RW. 2, Melawai, Kebayoran Baru, RT.3/RW.1, Melawai, Kby. Baru Kota Jakarta Selatan"
        },
        {
            "nama": "Nurul",
            "umur": 25,
            "alamat": "Balikpapan. Jalan MT Haryono RT 011/005 Kelurahan Damai, Kecamatan Balikpapan Selatan"
        }
    ]
    
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Umur</th>
                        <th>Alamat</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
};
export default DataTable;