import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarBrand,
  Dropdown,
  DropdownTrigger,
  DropdownItem,
  Button,
  DropdownMenu,
} from "@nextui-org/react";

export default function NavbarMin() {
  return (
    <div>
      <Navbar>
        <NavbarBrand>
          <p className='font-bold text-inherit'>Jclothes</p>
        </NavbarBrand>
        <NavbarContent className='' justify='center'>
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className='p-0 bg-transparent data-[hover=true]:bg-transparent'
                  radius='sm'
                  variant='solid'>
                  Barang
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label='Jclothes'
              className='w-[340px]'
              itemClasses={{
                base: "gap-4",
              }}>
              <DropdownItem
                key='autoscaling'
                href="/admin/barang/new"
                description='tambah barang baru mint'>
                Create
              </DropdownItem>
              <DropdownItem
                key='usage_metrics'
                href="/admin/barang/"
                description='Buat liat list barang mint'>
                List Barang
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
        <NavbarContent justify='end'>
          <NavbarItem className='hidden lg:flex'>
            <Link color='danger' href='#'>
              Logout
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
